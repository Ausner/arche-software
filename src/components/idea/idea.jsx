import css from "./idea.module.css";

const Idea = () => {
    return (
        <div className={css.container}>
            <h2>Do you have a great idea for your business?</h2>
            <span>Let's build it!</span>

            <div >
                <input type="email" className={css.input} id="Email" name="Email" placeholder="example@test.com" autocomplete="off"/>
                <input className={css.buttonSubmit} value="Contact me" type="submit"/>
            </div>
        </div>        

    )
}

export default Idea;