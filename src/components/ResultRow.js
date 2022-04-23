function ResultRow({ title, value }) {
    return (
        <div className="resultRow">
            <div className="resultRow_span-wrapper">
                <h2 className="resultRow_span-top">{title}</h2>
                <h3 className="resultRow_span-bottom">/ person</h3>
            </div>
            <span className="resultRow_result">${isFinite(value) ? value : 0}</span>
        </div>
    );
}

export default ResultRow;
