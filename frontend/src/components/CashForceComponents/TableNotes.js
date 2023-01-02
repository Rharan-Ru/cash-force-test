import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Container } from '@mui/material';
import "./styleForm.css";

const orderBuyerStatus = ['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado']

const TableNotes = ({ data }) => {
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  }
  
  const formatDate = (date) => {
    const dateNew = new Date(date)
    return [
      padTo2Digits(dateNew.getDate()),
      padTo2Digits(dateNew.getMonth() + 1),
      dateNew.getFullYear(),
    ].join('/');
  }

  const formatMoney = (money) => {
    const parsedMoney = Intl.NumberFormat(
      'pt-br', {style: 'currency', currency: 'BRL'}
    ).format(money)
    console.log(parsedMoney)
    return parsedMoney
  }

  return (
    <TableContainer component={Container}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NOTA FISCAL</TableCell>
            <TableCell align="left">SACADO</TableCell>
            <TableCell align="left">CEDENTE</TableCell>
            <TableCell align="left">EMISSÃO</TableCell>
            <TableCell align="left">VALOR</TableCell>
            <TableCell align="left">STATUS</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.orderNfId}
              </TableCell>
              <TableCell align="left">{row.buyer.name}</TableCell>
              <TableCell align="left">{row.provider.name}</TableCell>
              <TableCell align="left">{formatDate(row.emissionDate)}</TableCell>
              <TableCell 
                align="left"
                style={{color: '#00AD8C'}}
              >
                {formatMoney(row.value)}
              </TableCell>
              <TableCell 
                align="left"
                style={{color: '#00AD8C'}}
              >
                {orderBuyerStatus[row.orderStatusBuyer]}
              </TableCell>
              <TableCell align="left"><Button>Dados do cedente</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableNotes;