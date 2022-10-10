<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class CmsStoreModuleBuilder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $variable = "";
    protected $table_name = "";
    protected $signature = 'store {table_name} {--variable=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create store module';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->variable = $this->option('variable') ?? Str::camel($this->argument('table_name'));
        $variableFirstUpper = ucfirst($this->variable);
        $this->table_name = $this->argument('table_name');

        $modulesFolder = __DIR__ . "/../../../resources/js/store/modules";
        $newModuleFolder = $modulesFolder . "/{$this->variable}";
        if (is_dir($newModuleFolder)) return;
        mkdir($newModuleFolder);
        $exampleModulePath = $modulesFolder . "/example/exampleModule.js";
        $exampleModuleContent = file_get_contents($exampleModulePath);
        $newModuleContent = str_replace(['example', 'table_name'], [$this->variable, $this->table_name], $exampleModuleContent);


        $newModuleFile = fopen("$newModuleFolder/{$this->variable}Module.js", "w");
        fwrite($newModuleFile, $newModuleContent);
        fclose($newModuleFile);
    }
}
