
// Initializes the `nedb1` service on path `/nedb-1`. (Can be re-generated.)
import { App } from '../../app.interface';

import createService from './nedb-1.class';
import hooks from './nedb-1.hooks';
// !code: imports // !end
// !code: init // !end

let moduleExports = function (app: App) {

  let paginate = app.get('paginate');
  // !code: func_init // !end

  let options = {
    name: 'nedb-1',
    paginate,
    // !code: options_more // !end
  };
  // !code: options_change // !end

  // Initialize our service with any options it requires
  app.use('/nedb-1', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('nedb-1');

  service.hooks(hooks);
  // !code: func_return // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
