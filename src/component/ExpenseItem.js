 function ExpenseItem(props) {

    return (
        <div>
        <div>{props.date.toISOString()}</div>
        <div>{props.title}</div>
        <div>{props.amount}</div>
        </div>
    );
}

export default ExpenseItem;

// export function ExpenseItem1() {
//     return (<h2>EXPENSE ITEM</h2>)
// }

// function ExpenseItem2() {
//     return (<h2>EXPENSE ITEM</h2>)
// }
// export default ExpenseItem2;
