
export class VacationModel {
  constructor(private _id: number,
              private _country: string,
              private _city: string,
              private _seasonID: number,
              private _description: string) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }


  get seasonID(): number {
    return this._seasonID;
  }

  set seasonID(value: number) {
    this._seasonID = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
