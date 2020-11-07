<?php

class messages
{
    public $messages;
    public function __construct(array $messages)
    {
        $this->messages = $messages;
    }

    public function renderMessage()
    {
        $message = $this->messages;
        if (!empty($message)) {
            $output = "";
            if (count($message) > 1) {
                $output .= "<ul id='error'>";
                foreach ($message as $error) {
                    $output .= "<li>" . $error . "</li>";
                }
                $output .= "</ul>";
            } else {
                $output = $message[0];
            }
            return "<div id='error'>"
                . $output .
                "</div>";
        } else {
            return "";
        }
    }
}
