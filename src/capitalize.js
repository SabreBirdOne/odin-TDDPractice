function capitalize(string){
    // Capitalize the first letter of a string
    if (!string) return string;
    return string[0].toUpperCase() + string.slice(1);
}

export {capitalize}