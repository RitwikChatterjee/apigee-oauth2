var b1 = JSON.parse(response.content),
    propertiesToRemove = ['status', 'refresh_token_status', 'client_id',
                         'developer.email', 'organization_name',
                         'api_product_list', 'application_name'];


    propertiesToRemove.forEach(function(item){
      delete b1[item];
    });


// if there is no refresh token, don't keep properties related to it:
if( ! b1.refresh_token ) {
  delete b1.refresh_token_expires_in;
  delete b1.refresh_count;
}
context.setVariable('response.content', JSON.stringify(b1, null, 2));
