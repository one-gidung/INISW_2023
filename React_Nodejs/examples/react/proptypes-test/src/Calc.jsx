import React from 'react';
import PropTypes from 'prop-types';

const Calc = (props) => {
    let result = 0;
    switch(props.oper) {
        case "+" :
            result = parseFloat(props.x) + parseFloat(props.y)
            break;
        case "*" :
            result = parseFloat(props.x) * parseFloat(props.y);
            break;
        default :
            result = 0;
    }
    return (
        <div>
            <h3>연산 방식 : { props.oper }</h3><hr />
            <div>
                {props.x} {props.oper} {props.y} = {result}
            </div>
        </div>
    );
};


Calc.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    oper: PropTypes.oneOf(['+', '*'])
    // oper : (props, propName, componentName) => {
    //     if(props[propName] !== "+" && props[propName] !== "*") {
    //         return new Error(`${propName} 속성 값은 +,*만 허용합니다.(at ${componentName})`);
    //     }
    // }
}

Calc.defaultProps = { x:100, y:200, oper:"+" };
export default Calc;