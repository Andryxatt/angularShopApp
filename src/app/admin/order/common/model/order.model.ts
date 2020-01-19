export interface Order{
    id:string
    dateOrder: Date
    summ: number
    orderProducts?:any[]
}