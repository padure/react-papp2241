const crame = ['Cricova', 'Purcari', 'Mileștii Mici', 'Castel Mimi'];

export default function WineryList() {
    return (
        <div className="ex-size">
            {crame.map((nume) => (
                <div className="box" key={nume}>
                    {nume}
                </div>
            ))}
        </div>
    );
}
