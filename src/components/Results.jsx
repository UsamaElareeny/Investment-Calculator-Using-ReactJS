import { formatter } from "../util/investment";
export default function Results({ populateData }) {
    let totalInterest = 0;
    const initialInvestment = populateData[0].valueEndOfYear - populateData[0].interest - populateData[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value (End of Year)</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {populateData.map((row, index) => {
                    totalInterest += row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                    const investedCapital = row.valueEndOfYear - totalInterest;

                    return (
                        <tr key={index}>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.valueEndOfYear)}</td>
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
