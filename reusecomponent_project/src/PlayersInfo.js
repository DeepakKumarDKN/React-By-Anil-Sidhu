function PlayersInfo (props){
    return(
        <div class= 'info-section'>
            <p>{props.info.name}</p>
            <p>{props.info.players_role}</p>

        </div>
    )
}

export default PlayersInfo;