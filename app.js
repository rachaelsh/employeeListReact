var Employee = React.createClass({
  render: function() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Position : {this.props.position}</li>
          <li>Hire Date : {this.props.hireDate}</li>
          <li>Years of Service : {this.props.yearsOfService}</li>
          <li>Date of Birth : {this.props.DOB}</li>
          <li>Age : {this.props.age}</li>
        </ul>
        <img className="image" src={this.props.imgurl}/>
      </div>
    );
  }
});


var Employees = React.createClass({//component
  render: function() {
    //
    var employeeNodes = this.props.data.map(function(employee) {
      return (
        <Employee
          name={employee.name}
          position={employee.position}
          hireDate={employee.hireDate}
          yearsOfService={employee.yearsOfService}
          imgurl={employee.imgurl}
          DOB={employee.DOB}
          age={employee.age}
          key={employee.id}
          />
      )
    })
    //
  //   return (
  //     <div>
  //       This is a List of Employees.
  //     </div>
  //   );
  // }
      return (
        <div className="container">
          {employeeNodes}
        </div>
      );
    }
});


ReactDOM.render(
  <Employees data={employeeList}/>,
  document.getElementById('content')
);
