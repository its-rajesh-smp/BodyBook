const generateChatId = (myEmail, friendEmail) => {

    const res = myEmail.localeCompare(friendEmail);
    let ans = ""
    if (res == 1) {
        ans = myEmail + friendEmail

    }
    else {
        ans = friendEmail + myEmail

    }
    return ans
}

export default generateChatId


