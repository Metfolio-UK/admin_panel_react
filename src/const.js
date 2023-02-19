export const sidebarColor = "#1E365B";
export const yellowColor = "#E5B02C";
export const dashColor = "#E4E6EF";
export const greyColor = "#B5B5C3";
export const nameSymbolColor = "#F5F8FA";
export const menuSelectedColor = '#2b2b40';
export const tealColor = "#57B0BA";
export const paginationColor = "#F3F6F9";

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