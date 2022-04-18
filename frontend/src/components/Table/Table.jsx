import React, { useMemo} from 'react';
import { useTable} from 'react-table';
import './table.module.scss';

export const COLUMNS = [
  {
    Header: 'Time',
    accessor: 'time'
  },
  {
    Header: 'Temperature',
    accessor: 'temp'
  },
  {
    Header: 'Feels Like',
    accessor: 'feelsLike'
  },
  {
    Header: 'Wind',
    accessor: 'wind'
  },
  {
    Header: 'Chance of Rain',
    accessor: 'chanceOfRain'
  },
  {
    Header: 'Clouds',
    accessor: 'clouds'
  },
  {
    Header: 'Humidity',
    accessor: 'humidity'
  },
  {
    Header: 'Pressure',
    accessor: 'pressure'
  }
]

const MOCK_DATA = [
  {
    "time": "12 AM", "temp": "14°", "wind": 6, "chanceOfRain": 1, "clouds": 9, "humidity": 65 },
  {
    "time": "1 AM",
    "temp": "14°",
    "wind": 6,
    "chanceOfRain": 1,
    "clouds": 9,
    "humidity": 65
  },
  {
    "time": "2 AM",
    "temp": "14°",
    "wind": 6,
    "chanceOfRain": 1,
    "clouds": 9,
    "humidity": 65
  },
  {
    "time": "3 AM",
    "temp": "14°",
    "wind": 6,
    "chanceOfRain": 1,
    "clouds": 9,
    "humidity": 65
  },
  {
    "time": "4 AM",
    "temp": "14°",
    "wind": 6,
    "chanceOfRain": 1,
    "clouds": 9,
    "humidity": 65
  },
  {
    "time": "5 AM",
    "temp": "14°",
    "wind": 6,
    "chanceOfRain": 1,
    "clouds": 9,
    "humidity": 65
  },
  {
    "time": "6 AM",
    "temp": "14°",
    "wind": 6,
    "chanceOfRain": 1,
    "clouds": 9,
    "humidity": 65
  }
]

const WeatherTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({ columns, data })
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

  return (
    <table {...getTableProps()} >
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })
                }
                
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default WeatherTable;