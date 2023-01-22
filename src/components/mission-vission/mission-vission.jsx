import css from "./mission-vission.module.css";

const MissionVission = () => {
    return(
        <div className={css.container}>
            <div className={css.mission}>
                <h2>Mission</h2>
                <span>"At Arche Software, our mission is to Help the clients by building awesome software products. We believe that by building great software products, we can help make the world a better place for everyone"</span>
            </div>
            <div className={css.vission}>
                <h2>Vission</h2>
                <span>"Arche Software is a smart, efficient, fast, extraordinary, awesome, and quality software development company that builds software to help humanity and auto task"</span>
            </div>
        </div>
    )

}

export default MissionVission;