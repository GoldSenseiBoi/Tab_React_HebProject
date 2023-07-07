import React, { useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState([
    {
      date: "01/06/2023",
      jour: "Jeudi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "02/06/2023",
      jour: "Vendredi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "03/06/2023",
      jour: "Samedi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "04/06/2023",
      jour: "Dimanche",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "05/06/2023",
      jour: "Lundi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "06/06/2023",
      jour: "Mardi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "07/06/2023",
      jour: "Mercredi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "08/06/2023",
      jour: "jeudi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "09/06/2023",
      jour: "Vendredi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "10/06/2023",
      jour: "Samedi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "11/06/2023",
      jour: "Dimanche",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "12/06/2023",
      jour: "Lundi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "13/06/2023",
      jour: "Mardi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "14/06/2023",
      jour: "Mercredi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "15/06/2023",
      jour: "Jeudi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "16/06/2023",
      jour: "Vendredi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "17/06/2023",
      jour: "Samedi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "18/06/2023",
      jour: "Dimanche",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "19/06/2023",
      jour: "Lundi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "20/06/2023",
      jour: "Mardi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "21/06/2023",
      jour: "Mercredi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "22/06/2023",
      jour: "Jeudi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "23/06/2023",
      jour: "Vendredi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "24/06/2023",
      jour: "Samedi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "25/06/2023",
      jour: "Dimanche",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 1,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "26/06/2023",
      jour: "Lundi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "27/06/2023",
      jour: "Mardi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "28/06/2023",
      jour: "Mercredi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "29/06/2023",
      jour: "Jeudi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 1,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    },
    {
      date: "30/06/2023",
      jour: "Vendredi",
      sobet: 0,
      esportips: 0,
      mdf: 1,
      starBuilding: 0,
      laPoste: 0,
      infogreffe: 0,
      g7: 0,
      apg: 0,
      yewou: 0,
      horsStaffing: 0
    }
  ]);

  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  useEffect(() => {
    const dates = getDaysInMonth(6, 2023);
    const today = new Date();
    console.log(dates);
  }, []);
  
  useEffect(() => {

    // Fonction pour mettre à jour la colonne 'Etat'
    const updateEtat = () => {
      const updatedData = data.map((row) => {
        const rowValues = [row.sobet, row.esportips, row.mdf, row.starBuilding, row.laPoste, row.infogreffe, row.g7, row.apg, row.yewou, row.horsStaffing]; // Récupérer les valeurs des lignes (ligne1 à ligne3)
        const count = rowValues.reduce((acc, val) => acc + val, 0); // Compter le nombre de '1' dans la ligne
  
        if (count === 1) {
          return { ...row, Etat: "OK" };
        } else if (count > 1) {
          return { ...row, Etat: "Heure sup" };
        } else {
          return { ...row, Etat: "Journée incomplète" };
        }
      });
  
      setData(updatedData);
    };
  
    updateEtat();
  }, [data]);
  
  const handleValueChange = (rowIndex, columnName, newValue) => {
    console.log(rowIndex,columnName,newValue)
    const updatedData = data.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, [columnName]: Number(newValue) };
      }
      return row;
    });
    setData(updatedData);
  };
  const calculateColumnTotal = (columnName) => {
    return data.reduce((total, row) => total + row[columnName], 0);
  };

  const totalSum = calculateColumnTotal("sobet") + calculateColumnTotal("esportips") + 
  calculateColumnTotal("mdf") + calculateColumnTotal("starBuilding") + calculateColumnTotal("laPoste") + 
  calculateColumnTotal("infogreffe") + calculateColumnTotal("g7") + calculateColumnTotal("apg") + 
  calculateColumnTotal("yewou") + calculateColumnTotal("horsStaffing");


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th class="tg-0" colspan="2">
              jour
            </th>
            <th className="tg-1"> SoBet</th>
            <th className="tg-2">EsporTtips</th>
            <th className="tg-3">MDF</th>
            <th className="tg-4">StartBulding</th>
            <th className="tg-5">la Poste</th>
            <th className="tg-6">InfoGreff</th>
            <th className="tg-7">G7</th>
            <th className="tg-8">APG</th>
            <th className="tg-9">Yewou</th>
            <th className="tg-10">Hors Staffing(*)</th>
            <th className="tg-11">Etat</th>
            <th className="tg-12">Commentaire</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.jour}</td>
              <td>
                <input
                  type="number"
                  value={row.sobet}
                  onChange={(e) =>
                    handleValueChange(index, "sobet", parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.esportips}
                  onChange={(e) =>
                    handleValueChange(
                      index,
                      "esportips",
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.mdf}
                  onChange={(e) =>
                    handleValueChange(index, "mdf", parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.starBuilding}
                  onChange={(e) =>
                    handleValueChange(
                      index,
                      "starBuilding",
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.laPoste}
                  onChange={(e) =>
                    handleValueChange(
                      index,
                      "laPoste",
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.infogreffe}
                  onChange={(e) =>
                    handleValueChange(
                      index,
                      "infogreffe",
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.g7}
                  onChange={(e) =>
                    handleValueChange(index, "g7", parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.apg}
                  onChange={(e) =>
                    handleValueChange(index, "apg", parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.yewou}
                  onChange={(e) =>
                    handleValueChange(index, "yewou", parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.horsStaffing}
                  onChange={(e) =>
                    handleValueChange(
                      index,
                      "horsStaffing",
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td>{row.Etat}</td>
              <td>
                <input type="text"/>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">Total (en jour par projet)</td>
            <td>{calculateColumnTotal("sobet")}</td>
            <td>{calculateColumnTotal("esportips")}</td>
            <td>{calculateColumnTotal("mdf")}</td>
            <td>{calculateColumnTotal("starBuilding")}</td>
            <td>{calculateColumnTotal("laPoste")}</td>
            <td>{calculateColumnTotal("infogreffe")}</td>
            <td>{calculateColumnTotal("g7")}</td>
            <td>{calculateColumnTotal("apg")}</td>
            <td>{calculateColumnTotal("yewou")}</td>
            <td>{calculateColumnTotal("horsStaffing")}</td>
            <td></td>
          </tr>
         <tr>
            <td colSpan="2">Total général :</td>
            <td>{totalSum}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default App;