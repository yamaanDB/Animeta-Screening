//boston

const permissions = {
  create: true,
  view: true,
  edit: true,
  delete: false,
};

export const userData = {
  dashboard: { ...permissions },
  addProperty: { ...permissions },
};
