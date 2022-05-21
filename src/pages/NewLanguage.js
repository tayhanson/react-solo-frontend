import { Component } from "react";
import LanguageList from '../components/LanguageList';

class NewLanguage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            languages: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/language', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
            }).then(res => res.json()).then(data => {
                console.log(data)
                console.log(data.languages)
                let langArray = []
                data.languages.forEach((item) =>  
                    langArray.push({
                        language: item.languages,
                        tutorial_url: item.tutorial_url
                }));
                this.setState({
                    languages: langArray
                })
        })
    }

    render() {
        return (
            <div>
                <h1>Try these cool new languages out</h1>
                <LanguageList items={this.state.languages} />
            </div>
        );
    }
}

export default NewLanguage;