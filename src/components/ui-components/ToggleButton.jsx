const ToggleButton = ({active, onChange}) => {
    return (
        <div className={`toggle-button${active ? ' active' : ''}`} onClick={() => onChange(!active)}>
            <div className={`toggle-button-handle${active ? ' active' : ''}`}></div>
        </div>
    )
}

export default ToggleButton;