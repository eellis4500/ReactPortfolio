import "./portfolio.scss"

export default function portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                <div className="item">
                    <img src="/assets/subscriptionTracker.jpg" alt=""></img>
                    <a href="https://subscription-trkr.herokuapp.com/">Subscription Tracker</a>
                </div>
                <a href="https://github.com/JaredWeaver/Subscription-Tracker">Subscription Tracker Repository</a>
                <div className="item">
                    <img src="/assets/triviaTrainer.png" alt=""></img>
                    <a href="https://malenchite.github.io/trivia-trainer/">Trivia Trainer</a>
                </div>
                <a href="https://github.com/malenchite/trivia-trainer">Trivia Trainer Repository</a>
                <div className="item">
                    <img src="/assets/MainPage.jpg" alt=""></img>
                    <a href="https://sheltered-inlet-16421.herokuapp.com/">Note Taking</a>
                </div>
                <a href="https://github.com/eellis4500/Homework11">Note Taking Repository</a>
                <div className="item">
                    <img src="/assets/Calendar Example.jpg" alt=""></img>
                    <a href="https://eellis4500.github.io/WorkDayScheduler/">Work Day Scheduler</a>
                </div>
                <a href="https://github.com/eellis4500/WorkDayScheduler">Work Day Scheduler Repository</a>
                <div className="item">
                    <img src="/assets/dashboard with searches.jpg" alt=""></img>
                    <a href="https://eellis4500.github.io/Homework6/">Weather Dashboard</a>
                </div>
                <a href="https://github.com/eellis4500/Homework6">Weather Dashboard Repository</a>
                <div className="item">
                    <img src="/assets/codingQuiz.jpg" alt=""></img>
                    <a href="https://eellis4500.github.io/CodingQuiz/">Coding Quiz</a>
                </div>
                <a href="https://github.com/eellis4500/CodingQuiz">Coding Quiz Repository</a>
            </div>
        </div>
    )
}