<?php
// Серверная часть: Client RESTfull API
// Дата: 18.02.2016

$app->group('/api/v1', function () use( $db){

//--------------------------------
// POST: Добавить заказ
//--------------------------------
    $this->post('/checkout', function($request, $response) use( $db){

      $app = $response -> withStatus (200)
                       -> withHeader('Content-Type','application/json')
                       -> withHeader('Access-Control-Allow-Origin','*');

      $api = $request -> getParsedBody();
      $resultDB = $db -> orders() -> insert($api);

      $result = $api;


        echo json_encode($result, JSON_UNESCAPED_UNICODE);
        return $app;
      });

});
