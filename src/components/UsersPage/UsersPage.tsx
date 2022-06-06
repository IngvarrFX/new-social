import React from "react";
import styles from "./UsersPage.module.css";
import {PropsFromRedux} from "./UsersContainer";
import {AxiosResponse} from "axios";

const axios = require("axios").default;

type MyState = {}

export class UsersPage extends React.Component<PropsFromRedux, MyState> {

    subscribeHandle = (id: number, followed: boolean) => {
        followed ? this.props.unFollow(id) : this.props.follow(id);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res: AxiosResponse) => {
            this.props.setUsers(res.data.items);
            this.props.setTotalCountUsers(res.data.totalCount);
        });
    }

    onChangeCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res: AxiosResponse) => {
            this.props.setUsers(res.data.items);
        });
    }

    render() {
        const {users, totalUsersCount, pageSize, currentPage} = this.props;

        const pagesCount = Math.ceil(totalUsersCount / pageSize);

        const pages = Array.from({length: pagesCount}, (_, i) => i + 1);

        if(!users){
            return <span>Loading...</span>
        }
        return (
            <div className={styles.wrapper}>
                <div>
                    {pages.map((page) => <span
                        key={page}
                        className={currentPage === page ? styles.currentPage : styles.pages}
                        onClick={() => this.onChangeCurrentPage(page)}
                    >{page}</span>)}
                </div>
                {users.map(user => {
                    return <div className={styles.userBlock} key={user.id}>
                        <div className={styles.avaBlock}>
                            <img className={styles.userPhoto}
                                 src={user.photos.small ? user.photos.small : "https://w7.pngwing.com/pngs/601/312/png-transparent-social-media-avatar-graphy-digital-media-profile-blue-text-logo.png"}
                                 alt="user avatar"/>
                            <button
                                onClick={() => this.subscribeHandle(user.id, user.followed)}>{user.followed ? "follow" : "unfollow"}</button>
                        </div>
                        <div className={styles.userDescription}>
                            <div className={styles.rightBlock}>
                                <div>
                                    <span>Full name: </span>{user.name}</div>
                                <div><span>Status: </span>{user.status}</div>
                            </div>
                            <div className={styles.rightBlock}>
                                <div><span>City: </span>Palo Alto</div>
                                <div><span>Country: </span>USA</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
