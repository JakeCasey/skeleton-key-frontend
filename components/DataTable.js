import React, { Component } from 'react';
import Table from './styles/Table';
import _ from 'lodash';

class GenericRow extends Component {
  render() {
    var data = this.props.data;

    var cells = [];
    for (var prop in data) {
      //remove prototype property from graphql responses
      if (prop == '__typename') {
        delete data[prop];
      }
      if (Object.prototype.hasOwnProperty.call(data, prop)) {
        if (typeof data[prop] != 'string') {
          cells.push(<td>This is not a string!</td>);
        } else {
          cells.push(<td>{data[prop]}</td>);
        }
      }
    }
    return <tr>{cells}</tr>;
  }
}

class GenericTableHead extends Component {
  render() {
    var columns = this.props.columns;
    return (
      <tr>
        {columns &&
          columns.map((c, index) => (
            <th key={index}>{c.charAt(0).toUpperCase() + c.slice(1)}</th>
          ))}
      </tr>
    );
  }
}

export default class DataTable extends Component {
  render() {
    var data = this.props.data;
    var columns = [];
    columns = getColumnsFromData(data);
    //A custom head renderer for renaming table heads.
    var HeadRenderer = this.props.headRenderer;

    //A custom render component for each row of data.
    var RowRenderer = this.props.rowRenderer;

    //A custom render component to tack on to the bottom of the table. This can be used for things like inputs.
    var BottomRowRenderer = this.props.bottomRowRenderer;
    return (
      <div>
        <Table>
          <thead>
            {HeadRenderer ? (
              <HeadRenderer />
            ) : (
              <GenericTableHead columns={columns} />
            )}
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((data, index) =>
                RowRenderer ? (
                  <RowRenderer key={index} data={data} />
                ) : (
                  <GenericRow key={index} data={data} />
                ),
              )
            ) : (
              <tr>
                <td>No Data</td>
              </tr>
            )}
          </tbody>
          <tbody>{BottomRowRenderer && <BottomRowRenderer />}</tbody>
        </Table>
      </div>
    );
  }
}

var getColumnsFromData = data => {
  var keys = data.map(_.keys);
  keys.map(k => k.pop());
  return keys[0];
};
