export const sidebarColor = "#1E365B";
export const yellowColor = "#E5B02C";
export const dashColor = "#E4E6EF";
export const greyColor = "#B5B5C3";
export const nameSymbolColor = "#F5F8FA";
export const menuSelectedColor = '#2b2b40';
export const tealColor = "#57B0BA";
export const paginationColor = "#F3F6F9";
export const navyColor = "#464E5F";
export const blacky = "#212121";
export const gray2Color='#80808F';
export const redColor = "#F23F44";
export const yellow2Color = "#FFA800";
export const greenColor = "#50CD89";
export const red2Color = "#F64E60";
export const yellow3Color = "#FFC700";
export const cyanColor = "#4FC9DA";


export const isMobile = (width) => {
    return width<768;
}

export const getNameInitals = (name) => {
    name = name.trim();
    var nameList = name.split(" ");
    var len = nameList.length;
    if(len==1) return nameList[0][0];
    var ans = "";
    ans+=nameList[0][0];
    ans+=nameList[len-1][0];
    return ans;
}