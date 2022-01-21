export interface ObjMhospital {
  hospitalId: string;
  hospitalCode: string;
  hospitalName: string;
  databaseId: string;
  createByOrgCode: string;
  createByCode: string;
  modDate: Date;
  modByCode: string;
  parentOrgCode: string;
  createDate: Date;
  modByOrgCode: string;
  expireDate: Date;
  versionTypeId: number;
  maxUser: number;
  maxOrganization: number;
}

export interface MhospitalModel {
  objMhospital: ObjMhospital;
  hospitalTempVersionTypeId?: any;
  lstMOrganization?: any;
  owncloudUsed?: any;
  owncloudTotal?: any;
  owncloudTempTotal?: any;
  owncloudRelative?: any;
  smsCreditBalance?: any;
}
