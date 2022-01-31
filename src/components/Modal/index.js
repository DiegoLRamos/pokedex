

export default function Modal(){
  return(
    <>
      <div className='body'>
        <h2>{data.name}</h2>
        
        <h4>Nº {data.id}</h4>

        <div className='area-evolution'>
            <img src={data.sprites.front_shiny} alt={data.name} />
            <img src={data.sprites.front_shiny} alt={data.name} />
            <img src={data.sprites.front_shiny} alt={data.name} />
        </div>
      </div>

      <div className='footer'>
      <ul>
          {data.stats.map((item) => (
            <li key={item.stat.name}>
              <label>
                {item.stat.name}
              <progress title={`${item.base_stat}`} value={item.base_stat} max="100"></progress>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}