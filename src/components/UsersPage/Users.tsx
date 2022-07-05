import React from "react";
import styles from "./UsersPage.module.css";
import {UserType} from "../../redux/reducers/usersReducer/types";
import {NavLink} from "react-router-dom";
import {Pagination} from "../Pagination";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangeCurrentPage: (pageNumber: number) => void
    subscribeHandle: (id: number, followed: boolean) => void
    isFollowingProgress: number[]
}

export const Users = (props: UsersPropsType) => {

    const {users, totalUsersCount, pageSize, currentPage, onChangeCurrentPage, subscribeHandle} = props;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);

    if (!users.length) {
        return <span>Loading...</span>
    }
    return (<div className={styles.wrapper}>
            <div className={styles.pagination}>
                {/*{pages.map((page) => <span
                    key={page}
                    className={currentPage === page ? styles.currentPage : styles.pages}
                    onClick={() => onChangeCurrentPage(page)}
                >{page}</span>)}*/}
                <Pagination currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={onChangeCurrentPage}
                            totalCount={totalUsersCount}/>
            </div>
            {users.map(user => {
                return <div className={styles.userBlock} key={user.id}>
                    <div className={styles.avaBlock}>
                        <NavLink to={`/profile/${user.id}`}>
                            <div>
                                <img className={styles.userPhoto}
                                     src={user.photos.small ? user.photos.small : "https://w7.pngwing.com/pngs/601/312/png-transparent-social-media-avatar-graphy-digital-media-profile-blue-text-logo.png"}
                                     alt="avatar"/>
                            </div>
                        </NavLink>
                        <button
                            disabled={props.isFollowingProgress.includes(user.id)}
                            onClick={() => subscribeHandle(user.id, user.followed)}>{user.followed ? "unfollow" : "follow"}</button>
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
    );
};
