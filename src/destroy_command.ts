
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Destroy Command
//===========================================================================
const Trig_Destroy_Command_Conditions = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetEventPlayerChatString(), false ), 1, StringLength( GetEventPlayerChatString() ) ) === SubStringBJ( "-destroy", 1, StringLength( GetEventPlayerChatString() ) ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Destroy_Command_Func001002002 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_STRUCTURE ) === true );

};


const Trig_Destroy_Command_Func002A = (): void => {

	RemoveUnit( GetEnumUnit() )

};


const Trig_Destroy_Command_Actions = (): void => {

	udg_TempGroup = GetUnitsOfPlayerMatching( GetTriggerPlayer(), Condition( Trig_Destroy_Command_Func001002002 ) );
	ForGroupBJ( udg_TempGroup, Trig_Destroy_Command_Func002A )
	DestroyGroup( udg_TempGroup )
	udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] = 0;

};


//===========================================================================
const InitTrig_Destroy_Command = (): void => {

	gg_trg_Destroy_Command = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Destroy_Command, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Destroy_Command, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Destroy_Command, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Destroy_Command, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Destroy_Command, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Destroy_Command, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Destroy_Command, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Destroy_Command, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Destroy_Command, Condition( Trig_Destroy_Command_Conditions ) )
	TriggerAddAction( gg_trg_Destroy_Command, Trig_Destroy_Command_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Destroy_Command();

} );
