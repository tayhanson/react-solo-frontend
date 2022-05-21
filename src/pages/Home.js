import { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LanguageList from '../components/LanguageList';
import LanguageStatus from '../components/LanguageStatus';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      languageList: [],
      success: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.language.value)
    // this.setState({
    //   languageList: this.state.languageList.push(e.target.language.value)
    // })

    this.state.languageList.push(e.target.language.value);

    this.setState({
      languageList: this.state.languageList
    })
    // console.log(e);
    // let languages = e.target.languages.value;

    // let body = {
    //   languages: languages
    // }
    const body = {
      language: e.target.language.value,
      tutorial_url: e.target.tutorial_url.value
    }

    fetch('http://localhost:3001/language', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(data => {
      console.log(data)
      if (data.success == true){
        this.setState({
          success: true
        })
      } else {
        this.setState({
          success: false
        })
      }
    })
  }

  displayList = () => {
    return this.listItems.map((item) => {
      <li key={item.toString()}>
        {item}
      </li>
    });
  }

  render(){
    return (
      <div className="wrapper">
          <h2>Add a New Language</h2>
          <form action="#" onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  name="language_name"
                  id="language"
                  label="Language"
                  variant="outlined" />
              </div>
              <div>
                <TextField
                  name="Tutorial URL"
                  id="tutorial_url"
                  label="Tutorial URL"
                  variant="outlined" />
              </div>
              <div>
                <br></br>
                <Button type="submit" variant="contained">Submit</Button>
              </div>
          </form>
          <LanguageStatus success={this.state.success} />
      </div>
    );
  }

}

export default Home;