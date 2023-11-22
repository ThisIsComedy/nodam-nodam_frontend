export const isNameValid = (name: string): boolean => {
    const NAME_REGEX =  new RegExp("^[a-zA-Zㄱ-ㅎㅏ-ㅣㄴ가-힣0-9\_]{1,10}$");

    if (!NAME_REGEX.test(name)) {
        alert("잘못된 형식입니다");
        return false;
    }

    return true;
};

export const isNumber = (data: number): boolean => {
    if (isNaN(data)) {
        alert("숫자만 입력해주세요");
        return false;
    }
    return true;
}