type ErrorResponse = {
  message: string;
  errors: { [entityName: string]: string[] };
};

export type { ErrorResponse };
