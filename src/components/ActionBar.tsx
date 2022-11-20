import React, {ChangeEvent} from "react";

type ActionBarProps = {
    myCallbackFuntion(searchText: string): void
}

export default function ActionBar(props: ActionBarProps) {

    const searchTextOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("ActionBar")
        props.myCallbackFuntion(event.target.value)
    }
    return (
        <input onChange={searchTextOnChange}/>
    )
}