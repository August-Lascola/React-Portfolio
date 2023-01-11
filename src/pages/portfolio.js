import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="">
                                </a>
                                <p className="card-text">Work Day Scheduler</p>
                                <p id="repo"><a href="https://august-lascola.github.io/Work-Day-Scheduler/">https://github.com/August-Lascola/Work-Day-Scheduler</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://ana199816.github.io/homework-05/">
                                </a>
                                <p className="card-text">Random Password</p>
                                <p id="repo"><a href="https://august-lascola.github.io/Random-Password/"
                                >https://github.com/August-Lascola/Random-Password</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default portfolio