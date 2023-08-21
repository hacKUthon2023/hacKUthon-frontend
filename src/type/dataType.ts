export interface onBoardingResponseType {
  end_line: number;
  start_line: number;
  transfer: boolean;
  transfer_station: string;
}

export interface subwayNumResponseType {
  seats: [car_num: number, seat_num: string, end_station: string];
  subway_exists: boolean;
  subway_num: number;
}
