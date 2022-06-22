import empty from '../assets/empty.png'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.png'
import avatar5 from '../assets/avatar5.png'
import avatar6 from '../assets/avatar6.png'
import avatar7 from '../assets/avatar7.png'
import avatar8 from '../assets/avatar8.png'

const avatars = [
    empty,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
]

export function useAvatar(id) {
    return avatars[id || 0]
}

export function useAvatars() {
    return avatars.slice(1);
}