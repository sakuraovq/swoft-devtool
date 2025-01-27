<?php declare(strict_types=1);


namespace Swoft\Devtool\Command;

use Swoft\Bean\Annotation\Mapping\Inject;
use Swoft\Console\Annotation\Mapping\Command;
use Swoft\Console\Annotation\Mapping\CommandArgument;
use Swoft\Console\Annotation\Mapping\CommandMapping;
use Swoft\Console\Annotation\Mapping\CommandOption;
use Swoft\Devtool\Helper\ConsoleHelper;
use Swoft\Devtool\Migration\MigrationException;
use Swoft\Devtool\Model\Logic\MigrateLogic;
use Throwable;

/**
 * Class MigrateCommand
 *
 * @since 2.0
 *
 * @Command(name="migrate",alias="mig")
 * @CommandOption(name="prefix", desc="database prefix", default="", type="string")
 * @CommandOption(name="start", desc="start index for database prefix and prefix is not empty", default="0", type="int")
 * @CommandOption(name="end", desc="end index for database prefix and prefix is not empty", default="0",  type="int")
 * @CommandOption(name="db", desc="databases for migrate, many is separated by ','", default="", type="string")
 * @CommandOption(name="y", desc="No need to confirm", type="string")
 */
class MigrateCommand
{
    /**
     * @Inject()
     *
     * @var MigrateLogic
     */
    private $logic;

    /**
     * Creates a new migration.
     *
     * @CommandMapping(alias="c")
     * @CommandArgument(name="name", desc="the name of the new migration", type="string", mode=Command::OPT_REQUIRED)
     */
    public function create(): void
    {
        try {
            $name      = input()->get('name');
            $isConfirm = input()->getOpt('y', false);

            if (empty($name)) {
                throw MigrationException::make("name param can't be empty", $name);
            }
            $this->logic->create($name, (bool)$isConfirm);
        } catch (Throwable $e) {
            output()->error($e->getMessage());
            ConsoleHelper::highlight($e->getTraceAsString());
        }
    }

    /**
     * Upgrades the application by applying new migrations.
     *
     * @CommandMapping()
     * @CommandArgument(name="name", desc="database migrate names. Can be prefix , Many is separated by ','",
     *     type="string")
     * @CommandOption(name="name", desc="database migrate names. Can be prefix , Many is separated by ','", type="string")
     */
    public function up(): void
    {

        [$dbs, $prefix, $start, $end, $isConfirm] = $this->getPublicParams();

        $name  = input()->get('name', input()->getOpt('name', ''));
        $names = $name ? explode(',', $name) : [];

        try {
            $this->logic->up(
                $names,
                $dbs,
                $prefix,
                $start,
                $end,
                $isConfirm
            );
        } catch (Throwable $e) {
            output()->error($e->getMessage());
            ConsoleHelper::highlight($e->getTraceAsString());
        }
    }

    /**
     * Downgrades the application by reverting old migrations.
     *
     * @CommandMapping()
     */
    public function down(): void
    {
        [$dbs, $prefix, $start, $end, $isConfirm] = $this->getPublicParams();

        $name  = input()->get('name', input()->getOpt('name', ''));
        $names = $name ? explode(',', $name) : [];

        try {
            $this->logic->down(
                $names,
                $dbs,
                $prefix,
                $start,
                $end,
                $isConfirm
            );
        } catch (Throwable $e) {
            output()->error($e->getMessage());
            ConsoleHelper::highlight($e->getTraceAsString());
        }
    }

    /**
     * Displays the migration history.
     *
     * @CommandMapping(alias="his")
     * @CommandArgument(name="limit", desc=" the maximum number of migrations to be displayed.", type="int")
     */
    public function history(): void
    {
        [$dbs, $prefix, $start, $end,] = $this->getPublicParams();

        $limit = (int)input()->get('limit', 10);

        try {
            $this->logic->history($dbs, $prefix, $start, $end, $limit);
        } catch (Throwable $e) {
            output()->error($e->getMessage());
            ConsoleHelper::highlight($e->getTraceAsString());
        }
    }

    /**
     * @return array
     */
    private function getPublicParams(): array
    {
        $db        = input()->getOpt('db', '');
        $prefix    = input()->getOpt('prefix', '');
        $start     = input()->getOpt('start', '');
        $end       = input()->getOpt('end', '');
        $isConfirm = input()->getOpt('y', false);

        $dbs = $db ? explode(',', $db) : [];

        return [$dbs, (string)$prefix, (int)$start, (int)$end, (bool)$isConfirm];
    }
}
