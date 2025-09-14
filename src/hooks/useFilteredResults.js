import { useMemo } from "react";

export const useFilteredResults = (data, searchText) => {
    const filteredResults = useMemo(() => {
        if (!searchText) return [];

        const searchTextToMatch = searchText.toLowerCase().trim().split(" ").filter(text => text.trim()).join(" ");

        const filteredListByText = data.filter(item => {

            let textToSearchIn = "";


            // if(item.type === 'person') {
            //     textToSearchIn = item.name.toLowerCase().split(" ").join("");
            // } else if(item.type === 'file') {
            //     textToSearchIn = (item.name + item.category + item.fileType).toLowerCase().split(" ").join("");
            // }  else if(item.type === 'list') {
            //     textToSearchIn = item.name.toLowerCase().split(" ").join("");
            // }

            textToSearchIn = item.name.toLowerCase();

            return textToSearchIn.includes(searchTextToMatch);
        })

        return filteredListByText;
    }, [data, searchText]);

    return filteredResults;
}