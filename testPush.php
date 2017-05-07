<?php
  require('Pusher.php');

  $options = array(
    'encrypted' => true
  );
  $pusher = new Pusher(
    '816598f6efc192abe113',
    '17598ba1edf8e088d05d',
    '330283',
    $options
  );

  $data['message'] = 'Greetings from Pusher!';
  $pusher->trigger('my-channel1', 'my-event1', $data);
?>