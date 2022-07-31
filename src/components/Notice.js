const Notice = (props) => {
    const {data} = props;
    return (
        <div className="bg-info">
            <h5><b>{data.title}: </b>{data.message} - <i className="text-muted">{data.date_time}</i></h5>
        </div>
        
    );
}


export default Notice;