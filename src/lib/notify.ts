const loadToastr = async () => {
  const [{ default: toastr }] = await Promise.all([
    import('toastr'),
    import('toastr/build/toastr.min.css'),
  ]);
  return toastr;
};

export const notifySuccess = async (message: string) =>
  (await loadToastr()).success(message);

export const notifyInfo = async (message: string) =>
  (await loadToastr()).info(message);
