import {DialogsType, PostType} from "../types";
import {PotentialString} from "../types/types";


export type stateType = {
    profilePage: profilePageType
    messagePage: messagePageType
    sideBar: {}
}

export type profilePageType = {
    posts: PostType[]
    newPostText: string
    userProfile: null | UserProfileType
}

export type messagePageType = {
    dialogs: DialogsType[]
    newMessage: string
}

export type UserProfileType = {
    "aboutMe": PotentialString,
    "contacts": {
        "facebook": PotentialString,
        "website": PotentialString,
        "vk": PotentialString,
        "twitter": PotentialString,
        "instagram": PotentialString,
        "youtube": PotentialString,
        "github": PotentialString,
        "mainLink": PotentialString
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": PotentialString,
    "fullName": PotentialString,
    "userId": number,
    "photos": {
        "small": PotentialString,
        "large": PotentialString,
    }
}
