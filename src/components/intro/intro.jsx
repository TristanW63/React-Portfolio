import "./intro.css"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Tristan Wilson</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                    </div>
                </div>
                <div className="i-desc">
                Full stack web developer eager to join a creative, problem solving team.
                Ability to learn and implement new technologies quickly. These skills were learned at Vanderbilt University, 
                Full stack web development  boot camp.
                </div>
            </div>
        </div>
    )
}

export default Intro