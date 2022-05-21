import { useState } from "react";

export default function LanguageList(props) {
    const items = props.items;
    
    const listItems = items.map((item) =>
    <li key={item.language}>
        {item.language}, &nbsp;
        <a href={item.tutorial_url}>{item.tutorial_url}</a>
    </li>
    )
    return (
        <ul>{listItems}</ul>
    );
    // render() {
    //     const [isUpdated, setUpdated] = useState(false)
    //     const items = this.props.items;

    //     console.log(this.props.items);
    //     setUpdated(true);
    //     return (items.map((item) =>
    //     <li key={item.toString()}>
    //       {item}
    //     </li>
    //   ));
    // }
}