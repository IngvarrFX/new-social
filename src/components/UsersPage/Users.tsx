import React from "react";
import styles from "./UsersPage.module.css";
import {UserType} from "../../redux/reducers/usersReducer/types";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangeCurrentPage: (pageNumber: number) => void
    subscribeHandle: (id: number, followed: boolean) => void
}

export const Users = (props: UsersPropsType) => {

    const {users, totalUsersCount, pageSize, currentPage, onChangeCurrentPage, subscribeHandle} = props;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);

    if (!users.length) {
        return <span>Loading...</span>
    }
    return (<div className={styles.wrapper}>
            <div>
                {pages.map((page) => <span
                    key={page}
                    className={currentPage === page ? styles.currentPage : styles.pages}
                    onClick={() => onChangeCurrentPage(page)}
                >{page}</span>)}
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
                            onClick={() => subscribeHandle(user.id, user.followed)}>{user.followed ? "follow" : "unfollow"}</button>
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
