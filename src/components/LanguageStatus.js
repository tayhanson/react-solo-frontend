function LanguageStatus(props) {
    console.log(props.success)

    return (
        <h1>{props.success ? "success":"failed"}</h1>
    );
}

export default LanguageStatus;