import React from 'react';

const About = () => (
    <div className="about-container">
        <h1>About</h1>
        <p>
            This app will help you practice for the various Ham radio exams. There are three
            of these: Technician (beginner), General (intermediate), and Extra (advanced).
        </p>
        <p>The questions are pulled from the current ARRL
            <a HREF="http://www.arrl.org/question-pools">&nbsp;official question pools &nbsp;</a>
            as of Summer 2017.</p>
        <p>
            I regexed them all into a more Javascript-friendly format and rigged this up
            with React. Niche hardware hobbies and modern web development don't seem to have
            as much overlap as I expected. A lot of the sites I found were not very mobile
            friendly, so I made my own.</p>
        <p>
            I hope it is of some use to you. :)
        </p>

        <p>For taking the actual test:&nbsp;<br/>

            <a
                className="normal-link"
                href={"http://www.arrl.org/find-an-amateur-radio-license-exam-session"}>Find an Amateur Radio License Exam Location in Your Area</a>.
        </p>

    </div>
)

export default About