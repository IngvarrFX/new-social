import {DialogsType, PostType} from "../types";
import {PotentialString} from "../types/types";


export type stateType = {
    profilePage: profilePageType
    messagePage: messagePageType
    sideBar: {}
}

export type profilePageType = {
    posts: PostType[]
    userProfile: null | UserProfileType
    profileStatus: string
}

export type messagePageType = {
    dialogs: DialogsType[]
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
