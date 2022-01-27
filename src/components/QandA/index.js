import './style.scss';

const QandA = ({ question, answer, link }) => {
    return (
        <div className='q-and-a-container'>
            <div className='question'>{question}</div>
            <p className='answer'>
                {link.length > 0 ? answer.replace(/\{link_[0-9]\}/,
                    (match) => link[match[match.indexOf('_') + 1]]) : answer}
            </p>
        </div>
    );
};

export default QandA;
