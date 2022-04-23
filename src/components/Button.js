function Button({ title, onClick }) {
    return (
        <button className="main__result-area_reset-btn" type="button" onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;
